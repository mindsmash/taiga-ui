const {argv} = require('process');
const {version} = require('../package.json');
const {createInterface} = require('readline');
const {execSync} = require('child_process');

const mode = argv.length >= 2 ? argv[2] : 'prerelease';
const parsedVersion = version.split('.');

const newVersion = bump(parsedVersion, mode);

execSync('git checkout coyo-ui');
execSync('git pull');
execSync(`git checkout -b release/${newVersion}`);
execSync(
    `npm run release -- ${
        mode !== 'prerelease' ? '--release-as ' + mode : '--prerelease'
    }`,
);

checkChangelog().then(() => {
    execSync('git add .');
    execSync('git commit --amend --no-edit');
    execSync(`git push --set-upstream origin release/${newVersion}`);
    execSync(`git push --tags`);
});

function bump(versionArray, mode) {
    if (mode === 'major') {
        versionArray = [Number(versionArray[0]) + 1, 0, 0];
    }

    if (mode === 'minor') {
        versionArray[1] = Number(versionArray[1]) + 1;
        versionArray[2] = 0;
    }

    if (mode === 'patch') {
        versionArray[2] = Number(versionArray[2].split('-')[0]) + 1;
    }

    if (mode === 'prerelease') {
        const patch = Number(versionArray[2].split('-')[0]) + 1;
        const qualifier = Number(versionArray[2].split('-')[1] || -1) + 1;
        versionArray[2] = `${patch}-${qualifier}`;
    }

    return versionArray.join('.');
}

function checkChangelog() {
    let response;

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.setPrompt(`Check\n./CHANGELOG.md\nand save all fixes. Then press enter`);
    readline.prompt();
    console.log('\n');

    return new Promise(resolve => {
        readline.on('line', userInput => {
            response = userInput;
            readline.close();
        });

        readline.on('close', () => {
            resolve(response);
        });
    });
}
