document.addEventListener('DOMContentLoaded', function() {
    const lightSwitch = document.getElementById('light-toggle');
    const light = document.querySelector('.light');

    lightSwitch.addEventListener('change', function() {
        if (lightSwitch.checked) {
            light.style.backgroundImage = "url('/images/light_on.jpg')";
            light.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))';
        } else {
            light.style.backgroundImage = "url('/images/light_off.jpg')";
            light.style.filter = 'none';
        }
    });
});
