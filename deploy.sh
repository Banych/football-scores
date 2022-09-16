while getopts v:d:f: flag
do
    case "${flag}" in
        v) version=${OPTARG};;
    esac
done

npm run build

set -e

npm version $version

git subtree push --prefix dist origin gh-pages