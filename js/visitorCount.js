fetch("https://5rsedeqth3jp5kighyw5yqkv4y0baoxn.lambda-url.us-east-2.on.aws/")
            .then(response => response.json())
            .then(data => {
                document.getElementById("visitor-count").textContent = data.count;
            })
            .catch(error => {
                console.error("Error loading visitor count:", error);
                document.getElementById("visitor-count").textContent = "Unavailable";
            });
