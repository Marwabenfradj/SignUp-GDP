let submit = document.getElementById('submit')

if(submit) {
    submit.addEventListener('click', ()=>{
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let passwordconfirm = document.getElementById('passwordconfirm').value
        let terms = document.getElementById('terms').checked
    
        let verifemail = document.getElementById('verifemail')
        let verifpassword = document.getElementById('verifpassword')
        let verifpasswordconfirm = document.getElementById('verifpasswordconfirm')
        let verifterms = document.getElementById('verifterms')
        
        
        async function fetchData() {
            console.log('terms: ',terms)
            const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };
              if(validateEmail(email)){
                console.log('email valide')
              }else {
                console.log('no valid email')
                verifemail.style = 'display:inline'
                setTimeout(()=>{
                    verifemail.style = 'display:none'
                },5000)
                return;
              }
              if(password.length<5) {
                verifpassword.style = 'display:inline'
                setTimeout(()=>{
                    verifpassword.style = 'display:none'
                },5000)
                return;
              }
              if(password !== passwordconfirm) {
                verifpasswordconfirm.style = 'display:inline'
                setTimeout(()=>{
                    verifpasswordconfirm.style = 'display:none'
                },5000)
                return;
              }
              if(!terms) {
                verifterms.style = 'display:inline'
                setTimeout(()=>{
                    verifterms.style = 'display:none'
                },5000)
                return;
              }
    
            try {
                const response = await fetch(`http://localhost:4700/users/register`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: email, password: password})
                });
                if(!response.ok) {
                    throw new Error("Could not fetch resouce");
                }
                const data = await response.json();
                console.log(data)
                location.href = "./profil.html"
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    
    
    /*     async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4700/users`);
                if(!response.ok) {
                    throw new Error("Could not fetch resouce");
                }
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData() */
    
    
        
        
    })
}

console.log(window.location.pathname)

if(window.location.pathname.includes('/profil.html')) {
        async function fetchUsersData() {
        try {
            const response = await fetch(`http://localhost:4700/users`);
            if(!response.ok) {
                throw new Error("Could not fetch resouce");
            }
            const data = await response.json();
            console.log(data)
            let users = document.getElementById('users')
            console.log(users)
            const tbody = document.getElementById('tbody')
            data.map((e)=>{
                const content = document.createElement("tr"); 
                const contentTd = document.createElement("td");
                contentTd.innerText = e.email
                content.appendChild(contentTd)
                tbody.appendChild(content)
            })
            
            

        } catch (error) {
            console.error(error)
        }
    }
    fetchUsersData()
}

