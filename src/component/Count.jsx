
const Count = () => {
    return (
        <div className="max-w-7xl mx-auto my-8 px-2 py-4" >
            <div className="flex text-white">
                <div className="flex-1">
                    <h2 className="text-4xl font-semibold">Our Fun Fact</h2>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Explicabo maiores neque <br /> aperiam ad excepturi iste, <br /> doloribus magni in ducimus laboriosam!</p>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-4">
                        <span className="countdown font-mono text-6xl">
                            <span style={{ "--value": 56 }}></span>
                        </span>
                        <span>Global Happy Clinet</span>
                    </div>
                    <br />
                    <div className="flex items-center gap-4">
                        <span className="countdown font-mono text-6xl">
                            <span style={{ "--value": 56  }}></span>
                        </span>
                        <span>Team Member</span>
                    </div>
                </div>
                <div className="flex-1">
                <div className="flex items-center gap-4">
                        <span className="countdown font-mono text-6xl">
                            <span style={{ "--value": 56 }}></span>
                        </span>
                        <span>Project complet</span>
                    </div>
                    <br />
                    <div className="flex items-center gap-4">
                        <span className="countdown font-mono text-6xl">
                            <span style={{ "--value": 56 }}></span>
                        </span>
                        <span>Digital Products</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Count