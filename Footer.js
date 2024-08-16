import React  from 'react'

const Footer = () => {
    function date(){
        const year=new Date();
        const d=year.getFullYear()
        return d
    }
    return(
    <footer>
    <h1 className='footer'> copyright &copy; {date()} </h1>
    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse molestias iste perspiciatis vitae, dicta consequuntur non ex quis temporibus quod vel atque, explicabo ullam culpa et consectetur nisi nam dolor voluptatem? Doloremque aliquam voluptas ducimus quod, delectus mollitia veritatis nihil?</h4>
    </footer>
    )
}

export default Footer
