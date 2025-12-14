const minVersion = '1.0';
async function main(args) {
    if (wpm.version === null) {
        wpm.error("wpm has some errors. Please try after again.");
        return 1;
    }
    if (wpm.version < minVersion) {
        wpm.error("wpm version " + minVersion + " or higher is required to run this script.");
        return 1;
    }
    const projectPath = wpm.projectPath;
}