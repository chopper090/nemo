#!/usr/bin/env bash
# Deploy script — Note Trainer
# Usage:
#   ./scripts/deploy.sh patch "fix: descrizione"        # 2.00.00 -> 2.00.01
#   ./scripts/deploy.sh minor "feat: descrizione"       # 2.00.01 -> 2.01.00
#   ./scripts/deploy.sh major "redesign: descrizione"   # 2.01.00 -> 3.00.00
#   ./scripts/deploy.sh nobump "docs: solo doc, no bump"  # nessun bump versione
#
# Cosa fa:
#   1) Copia index.html + sw.js + altri asset dalla SOURCE_DIR
#   2) Bumpa VERSION (se non "nobump")
#   3) Aggiorna sw.js CACHE name con la nuova versione
#   4) git add + commit con il messaggio dato
#   5) git push origin main
#   6) git tag v<version> + push tag (se bump effettuato)

set -e

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="${SOURCE_DIR:-/c/Users/marco/OneDrive/0. AI/CLAUDE/Chitarra/SOLO trainer}"

BUMP="${1:-patch}"
MSG="${2:-update}"

cd "$REPO_ROOT"

# ─── 1) bump VERSION ───
CURRENT="$(cat VERSION | tr -d '[:space:]')"
IFS='.' read -r MAJ MIN PAT <<<"$CURRENT"

case "$BUMP" in
  major) MAJ=$((MAJ+1)); MIN=0; PAT=0 ;;
  minor) MIN=$((MIN+1)); PAT=0 ;;
  patch) PAT=$((PAT+1)) ;;
  nobump) ;;
  *) echo "❌ bump deve essere patch|minor|major|nobump"; exit 1 ;;
esac

# Format: zero-pad minor e patch a 2 cifre per leggibilità (es. 2.00.01)
if [ "$BUMP" != "nobump" ]; then
  NEW_VER="$(printf "%d.%02d.%02d" "$MAJ" "$MIN" "$PAT")"
  echo "$NEW_VER" > VERSION
  echo "🔖 Version bump: $CURRENT → $NEW_VER"
else
  NEW_VER="$CURRENT"
  echo "🔖 No version bump (current: $CURRENT)"
fi

# ─── 2) copia file aggiornati ───
echo "📋 Copy from: $SOURCE_DIR"
for f in index.html sw.js fretboard-lab.html manifest.json icon.svg; do
  if [ -f "$SOURCE_DIR/$f" ]; then
    cp "$SOURCE_DIR/$f" "./$f"
    echo "   ✓ $f"
  fi
done

# ─── 3) aggiorna CACHE name dentro sw.js con la nuova versione ───
if [ "$BUMP" != "nobump" ] && [ -f sw.js ]; then
  # Sostituisce "nemo-vXX-*" con "nemo-v<NEW_VER>-deploy"
  # Compatibile sia con macOS/BSD sed che GNU sed via tmp file
  TAG_SAFE="$(echo "$NEW_VER" | tr '.' '-')"
  python -c "
import re, pathlib
p = pathlib.Path('sw.js')
s = p.read_text(encoding='utf-8')
s2 = re.sub(r\"const CACHE = 'nemo-v[^']+'\", f\"const CACHE = 'nemo-v$TAG_SAFE-auto'\", s, count=1)
p.write_text(s2, encoding='utf-8')
" 2>/dev/null || echo "   ⚠ CACHE bump skip (python non disponibile, fallo a mano in sw.js)"
fi

# ─── 4) git add + commit + push ───
git add -A
if git diff --staged --quiet; then
  echo "✋ Nessun cambiamento da committare. Esco."
  exit 0
fi

COMMIT_MSG="v$NEW_VER · $MSG"
git commit -m "$COMMIT_MSG"
echo "✓ Commit: $COMMIT_MSG"

git push origin main
echo "✓ Pushed origin/main"

# ─── 5) tag (solo se bump effettuato) ───
if [ "$BUMP" != "nobump" ]; then
  TAG="v$NEW_VER"
  if git rev-parse "$TAG" >/dev/null 2>&1; then
    echo "⚠ Tag $TAG esiste già — skip"
  else
    git tag -a "$TAG" -m "$COMMIT_MSG"
    git push origin "$TAG"
    echo "✓ Tagged + pushed: $TAG"
  fi
fi

echo ""
echo "🚀 Deploy completo. GitHub Pages aggiorna in ~30s."
echo "   Live: https://chopper090.github.io/note-trainer/"
