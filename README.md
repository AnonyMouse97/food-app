# WacDo's app

Hello and welcome to the WacDo's repository.

## The origins

This app is a technical test for a front-end internship at Mango3D.

## What is it about ?

The Wacdo's app is a small burger app build in 3 pages and based on the [McDonald's app concept](https://dribbble.com/shots/14126838-McDonald-s-App-3) from [veno](https://dribbble.com/Veno_Design).

the 3 pages are :

- The **listing page** shows a listing of products to add to your order. The design is the same as the order panel of the design, without the "edit" & "delete" button, without the "quantity" buttons, but with an "add to cart" button.

- The **order page** shows the content of your order, same as in the design. The only thing to add is, after the **cost** value, a **prepare time** indication that should be correct for the whole order.

- The **details page** shows the details of a product, the ingredient it uses & the quantity/add to cart buttons.

I choosed to use the native **useContext** hook to save the shopping list and the **BrowserRouter** for the navigation. I also use **useParams** a bit to have a unique page for each item.

## Disclaimer

As i got sick during the test thanks to my 5G biological antenna's update I had to rush a bit to finish a viable app. The project structure could be much more clean (optimizing SASS use, reusing components, better react structure for more readable code,...) But in the end it works ans the result is not bad at all ! Hope you'll like it 😊.

And don't forget to order you fake burger 🍔 !

[The deployed site](https://wacdos.netlify.app/)
