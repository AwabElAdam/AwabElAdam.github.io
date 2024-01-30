function validateAndSend() {
    // Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var whatsapp = document.getElementById("whatsapp").value;

    
  
    // validate name
    if (name === "") {
      alert("Please provide a name");
      return;
    }
  
    // Validate the phone number (you can customize this regex based on your requirements)
    var phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // Assuming a 10-digit phone number
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
    // Validate the email address (you can customize this regex based on your requirements)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    const utm_term = urlParams.get('utm_term');
    const utm_content = urlParams.get('utm_content');
    const gclid = urlParams.get('gclid');

    alert(`${name},${email},${phone}`);
    // If validation passes, send the data to the server for email processing
    sendToEmail(name, email, phone, whatsapp, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid);
  }
  
  

  function sendToEmail(name, email, phone, whatsapp, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid) {
    // This is where you would make an AJAX request to your server to handle the email sending
    // Example using fetch API (replace with your server endpoint)
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, phone: phone, whatsapp: whatsapp , utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign, utm_term: utm_term, utm_content: utm_content, gclid: gclid }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Data sent to email successfully.");
        } else {
          alert(`Failed to send data to email. ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // nav bar color change
  const navlinks = document.getElementById('nav');
  const navbtn = document.getElementById('navbtn')

  window.onscroll = function () {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {

      navbtn.classList.add("text-orange-600", "font-bold")
      navbtn.classList.remove("text-white")

      navlinks.classList.add("bg-white","text-slate-600","h-20");
      navlinks.classList.remove("bg-transparent","text-white","h-36");
      
    } else{
      navbtn.classList.remove("text-orange-600", "font-bold")
      navbtn.classList.add("text-white")

      navlinks.classList.add("bg-transparent","text-white","h-36");
      navlinks.classList.remove("bg-white","text-slate-600","h-20");
    }
    
  }