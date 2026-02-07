  function countUp(id, target, duration) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(start);
    }, 16);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // merr id-në e numrit brenda kartës
        const numberEl = entry.target.querySelector("b");
        if (numberEl.id === "projects-count") countUp("projects-count", 85, 1500);
        if (numberEl.id === "clients-count") countUp("clients-count", 65, 1500);
        if (numberEl.id === "coffee-count") countUp("coffee-count", 2, 2000);
      }
    });
  });

  // ✅ Vëzhgo të gjitha .card-info
  document.querySelectorAll(".card-info").forEach(card => {
    observer.observe(card);
  });

        // Initialize EmailJS with your public key
        (function() {
            // Replace with your actual EmailJS public key
            emailjs.init("kookDvy7kGgKMqao4");
        })();
        
        // Handle form submission
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const spinner = document.getElementById('spinner');
            
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            spinner.classList.remove('d-none');
            
            // Hide previous alerts
            document.getElementById('successAlert').style.display = 'none';
            document.getElementById('errorAlert').style.display = 'none';
            
            // Prepare template parameters
            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Send email using EmailJS
            // Replace with your actual Service ID and Template ID
            emailjs.send('service_gx2u7rr', 'template_wul0p0k', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    document.getElementById('successAlert').style.display = 'block';
                    
                    // Reset form
                    document.getElementById('contactForm').reset();
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    spinner.classList.add('d-none');
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    document.getElementById('errorAlert').style.display = 'block';
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    spinner.classList.add('d-none');
                });
        });