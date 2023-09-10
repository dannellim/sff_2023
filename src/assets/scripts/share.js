function shareLink() {
    if (navigator.share) {
        let url = document.referrer;
        console.log(`Previously visited page URL: ${url}`);
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