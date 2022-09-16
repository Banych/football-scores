while getopts v:d:f: flag
do
    case "${flag}" in
        v) version=${OPTARG};;
    esac
done

npm run build

git add && git commit -m 'builded for deploy'

set -e

npm version $version

git subtree push --prefix dist origin gh-pages