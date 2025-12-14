async function main(args) {
    if (wpm.version < 1.0) {
        wpm.error("wpm version 1.0 or higher is required to run this script.");
        return 1;
    }
}