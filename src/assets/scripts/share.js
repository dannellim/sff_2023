function shareLink() {
    if (navigator.share) {
        let url = document.location.href;
        const canonicalElement = document.querySelector('link[rel=canonical]');
        if (canonicalElement !== null) {
            url = canonicalElement.href;
        }
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