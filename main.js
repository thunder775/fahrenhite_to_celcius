function convert() {
    let x = document.getElementById('cel');
    let y = document.getElementById('image');
    if(x!==null) x.remove();
    if(y!==null) y.remove();
    let fah = document.getElementById('fah').value;

    let celcius = (fah - 32) / 1.8;
    // alert((fah - 32) / 1.8);
    let cel = document.createElement('h1');
    let image = document.createElement('img');
    cel.id = "cel";
    image.id = "image";
    image.className = "season-image";
    if (celcius < 5) {
        image.src = 'https://images.unsplash.com/photo-1489674267075-cee793167910?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80';
    } else if (celcius > 5 && celcius < 20) {
        image.src = 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';
    } else {
        image.src = 'https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80';
    }
    cel.innerText = `${celcius}° C`;

    document.getElementsByTagName('body')[0].appendChild(cel);
    document.getElementsByTagName('body')[0].appendChild(image);
}