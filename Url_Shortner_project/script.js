document.getElementById('button').addEventListener('click', (event)=>{
    event.preventDefault(); // forcefully stopping the reload



    const getURL = document.getElementById('url').value;
    // check laga lo
    if(!getURL){
        console.error("Please write something...");
        return;
    }
    
    const shortCode = Math.random().toString(36).substring(7);
    const shortURL = `https://shortly/${shortCode}`;

    // Appending on the page

    document.getElementById('short-url').textContent = shortURL;
    document.getElementById('short-url').href = getURL;
    document.getElementById('result').style.display = 'block';


});