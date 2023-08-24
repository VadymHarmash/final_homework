import React from 'react'

export default function OrderForm({ productsToBuy }) {
    const fields = [
        {
            classes: [
                'order-list__form__field',
                'name'
            ],
            label: 'Full Name*',
            name: 'name',
            type: 'text',
            placeholder: 'Your Name',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'email'
            ],
            label: 'Your Email*',
            name: 'email',
            type: 'email',
            placeholder: 'Your Email Address',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'address'
            ],
            label: 'Address*',
            name: 'address',
            type: 'text',
            placeholder: 'Your Company Address',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'phone'
            ],
            label: 'Phone number*',
            name: 'phone',
            type: 'number',
            placeholder: 'Enter Your Phone',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'extra'
            ],
            label: 'Message',
            name: 'extra',
            type: 'textarea',
            placeholder: 'Some Extra Information',
            required: false
        }
    ]

    function showDataFromForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {}
        formData.forEach((value, name) => {
            data[name] = value
        })
        console.log(data)
        console.log(productsToBuy)
    }

    return (
        <div className="order-list__form">
            <form onSubmit={showDataFromForm}>
                {fields.map((field, index) => (
                    <div key={index} className={field.classes.join(' ')}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input type={field.type}
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            required={field.required} />
                    </div>
                ))}
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}
