export const calculatePageLoadTime = () => {
    if (typeof window !== 'undefined') {
        const miliSecond = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
        return miliSecond / 1000;
    }
}