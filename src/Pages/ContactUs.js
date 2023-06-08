import {React,useState} from 'react'
import { Container,InputGroup,Form,Button } from 'react-bootstrap'

function ContactUs() {
    const [Name,setName] = useState('')
    const [Email,setEmail] = useState('')
    const [Phone,setPhone] = useState('');
    const [FormIsSubmitted,setFormIsSubmitted] = useState(false);
   
    const HandleName=(e)=>{
        setName(e.target.value)
    }
    const HandleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const HandlePhone=(e)=>{
        setPhone(e.target.value)
    }
    async function HandleSubmit(e){
        e.preventDefault()
       if(Name.trim()!=='' && Email.trim()!=='' && Phone.trim()!==''){
        const user = {
            name: Name,
            Email: Email,
            Phone:Phone
        }
       await fetch('https://moviestore-9dbbc-default-rtdb.firebaseio.com/contectUs.json',{
            method:'POST',
            body:JSON.stringify(user)
        })
       setName('')
       setEmail('')
       setPhone('')
      setFormIsSubmitted(true)
       }else{
        alert('Please fill all the fields')
       }
    }

  return (
   <Container className='my-2'>
   <Form onSubmit={HandleSubmit}>
        <h4>Please fill the form so we can contact you</h4>
    <InputGroup className="mb-3">
      <InputGroup.Text>Name</InputGroup.Text>
      <Form.Control value={Name} onChange={HandleName} aria-label="Title" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text>E-mail</InputGroup.Text>
      <Form.Control value={Email} onChange={HandleEmail} type='email'aria-label="Title" />
    </InputGroup>
    <InputGroup className="mb-3">
    <InputGroup.Text>Phone</InputGroup.Text>
      <Form.Control value={Phone} onChange={HandlePhone} type="number" aria-label="With textarea" />
    </InputGroup>
       {!FormIsSubmitted && <Button variant='info' type='submit'>Submit</Button>}
       {FormIsSubmitted && <h4>Thanks for your interest, we will contact you as soon as possible.</h4>}
    </Form>
   </Container>
  )
}

export default ContactUs
