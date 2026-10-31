// Mobile navigation toggle
(function ()
{
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    function setOpen(open)
    {
        menu.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        var icon = toggle.querySelector('i');
        if (icon) icon.className = (open ? 'bi bi-x-lg' : 'bi bi-list') + ' text-3xl text-[#521C0D]';
    }

    toggle.addEventListener('click', function ()
    {
        setOpen(!menu.classList.contains('open'));
    });

    // Reset when resizing up to the desktop layout
    window.addEventListener('resize', function ()
    {
        if (window.innerWidth >= 900) setOpen(false);
    });
})();
