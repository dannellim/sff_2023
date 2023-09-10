function shareLink(url) {
    if (navigator.share) {
        console.log(`Previously visited page URL: ${url}`);
        // navigator.share({
        //     text: url,
        // })
        navigator.share({
            title: document.title,
            text: "DISCOVER THE CRÉDIT AGRICOLE GROUP",
            url: url
        })
            .then(() => console.log('Successful share'))
            .catch(error => console.log('Error sharing:', error));
    } else {
        console.log("sharing not allowed");
    }
}