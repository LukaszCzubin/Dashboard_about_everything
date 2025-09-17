    const toggle = document.getElementById('navToggle');
    const sidebar = document.getElementById('siteSidebar');
    let open = false;

    function setState(state){
      open = !!state;
      if(open){
        sidebar.classList.add('open');
        toggle.setAttribute('aria-expanded','true');
      } else {
        sidebar.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    }

    setState(false);
    toggle.addEventListener('click',()=> setState(!open));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&open)setState(false)});
    document.addEventListener('click',e=>{if(open&&!sidebar.contains(e.target)&&!toggle.contains(e.target))setState(false)});