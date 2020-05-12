const Title = props => {
	return <h1>{props.title}</h1>
}

const Description = props => {
	return <p>{props.description}</p>
}

const Button = props => {
	return <button>{props.button}</button>
}

const Content = props => {
	return <div>{props.content}</div>
}

const Wrapper = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<button>{props.button}</button>
			<div>{props.content}</div>
		</div>
	)
}

const root = document.getElementById('root')

ReactDOM.render(
	<Wrapper
		title="Moj title"
		description="Moj description"
		button="Moj button"
		content="Moj content"
	/>,
	root
)
