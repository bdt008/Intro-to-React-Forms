import react from 'react';
import { useEffect, useState, UseState } from 'react';

function Form() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ phoneType, setPhoneType ] = useState('');
    const [ staff, setStaff ] = useState('');
    const [ student, setStudent ] = useState('');
    const [ bio, setBio ] = useState('');
    const [signUp, setSignUp ] = useState('');

    return(
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                    type='text'
                    id='name'
                    value={name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    type='text'
                    id='email'
                    value={email}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type='text'
                    id='phone'
                    value={phone}
                    />
                </div>
                <div>
                    <label htmlFor="phoneType">Phone Type</label>
                    <select
                    name='phoneType'
                    value={phoneType}
                    >
                        <option value='' disabled>Select a phone type...</option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <p>
                        Staff: Instructor Or Student
                    </p>
                    <input
                    type='radio'
                    id='instructor'
                    name='instructorOrStudent'
                    value={staff}
                    />
                    <label htmlFor="staff">Instructor</label>
                    <input
                    type='radio'
                    id='student'
                    name='instructorOrStudent'
                    value={student}
                    />
                    <label htmlFor="student">Student</label>
                </div>
                <div>
                    <label htmlFor="bio">bio</label>
                    <textarea
                    id='bio'
                    name='bio'
                    value={bio}
                    />
                </div>
             </form>
        </div>
    )
}

export default Form;
