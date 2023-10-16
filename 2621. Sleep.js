/**
 * @param {number} millis
 */
 async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis))
}


//TypeScript Solution
async function sleep(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis))
}
