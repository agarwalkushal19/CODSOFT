const darkBtn = document.querySelector('.dark');
    const lightBtn = document.querySelector('.light');
    darkBtn.style = "opacity: 0.1"; //Default Theme is Dark!

    //If Dark Theme button is clicked, then switch to dark theme
    darkBtn.addEventListener('click', () => {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        window.localStorage.setItem('mode', 'dark'); 
        darkBtn.style = "opacity: 0.1";
        lightBtn.style = "opacity: 1";
    });

    //if Light Theme button is clicked, then switch to light theme
    lightBtn.addEventListener('click', () => {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        window.localStorage.setItem('mode', 'light');//Set mode value to light and save it, if user refresh the page, the browser can access this value
        darkBtn.style = "opacity: 1";
        lightBtn.style = "opacity: 0.1";
    });

    const mode = window.localStorage.getItem('mode');//grab mode value
    if (mode == 'dark') { //if user sets the theme to dark, then load dark theme
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        darkBtn.style = "opacity: 0.1";
        lightBtn.style = "opacity: 1";
    }

    if (mode == 'light') { //if user sets the theme to light, then load light theme
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        darkBtn.style = "opacity: 1";
        lightBtn.style = "opacity: 0.1";
    }
