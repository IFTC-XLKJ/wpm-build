const minVersion = '1.0';
async function main(args) {
    if (wpm.version < minVersion) {
        wpm.error("wpm version " + minVersion + " or higher is required to run this script.");
        return 1;
    }
}