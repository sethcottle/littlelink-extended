document.addEventListener('DOMContentLoaded', function () {
    // 1) Check for slide-container
    const containers = document.querySelectorAll('.slide-container');
  
    containers.forEach((container) => {
      // 2) Find the key elements inside this container
      const trigger     = container.querySelector('.sensitive-trigger');
      const panel       = container.querySelector('.sensitive-panel');
      const continueBtn = container.querySelector('.sensitive-continue');
      
      // 3) Read the URL from data-continue-url
      const externalUrl = container.dataset.continueUrl;
  
      // Safety checks: if we don’t have a trigger or panel, skip
      if (!trigger || !panel) return;
  
      // 4) Toggle panel on trigger click
      trigger.addEventListener('click', function (evt) {
        evt.preventDefault();
        panel.classList.toggle('open'); // open if closed, close if open
      });
  
      // 5) Close panel if user clicks outside
      document.addEventListener('click', function (evt) {
        if (
          panel.classList.contains('open') &&
          !panel.contains(evt.target) &&
          evt.target !== trigger
        ) {
          panel.classList.remove('open');
        }
      });
  
      // 6) “Continue” button
      if (continueBtn) {
        continueBtn.addEventListener('click', function () {
          // Close the panel
          panel.classList.remove('open');
  
          // If there's a data-continue-url, open it in a new tab
          if (externalUrl) {
            window.open(externalUrl, '_blank');
          }
        });
      }
    });
  });  