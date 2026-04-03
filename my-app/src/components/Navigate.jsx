const Navigate = (navigate) =>
{
    const handleStart = () => {
        navigate("/");
    }

    const handleHome = () => {
        navigate("/home");
    }

    const handleMargaret = () => {
        navigate("/margaret");
    }

    const handleJohn = () => {
        navigate("/john");
    }

    const handleBill = () => {
        navigate("/bill");
    }

    const handleTheChoice = () => {
        navigate("/theChoice");
    }

    return { 
        handleStart, 
        handleHome, 
        handleMargaret, 
        handleJohn, 
        handleBill, 
        handleTheChoice 
    }; 
}

export default Navigate; 
