type typeExtractVideoFrames = (framesExtractor: () => string[]) => string[] 

export const extractVideoFrames: typeExtractVideoFrames = (framesExtractor) => {
    const result = framesExtractor();
    return result;
}
