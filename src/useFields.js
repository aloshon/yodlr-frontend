import {useState} from "react";

/**
 * Hook for form inputs
 */
const useFields = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = evt => {
        // Get user input values from the form inputs
        const {name, value} = evt.target;
        // set value of input as user changes it
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const resetFormData = () => {
        setFormData(initialState);
    }

    return [formData, handleChange, resetFormData]
}

export default useFields;