import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="api/onboarding">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}
			<label htmlFor="passwordInput">Password:</label>
			<input id="passwordInput" type="password" name="password" />
			<br />
			<label htmlFor="ageInput">Age:</label>
			<input id="ageInput" type="number" name="age" min="0" max="150" />
			<br />
			<label htmlFor="photoInput">Photo:</label>
			<input id="photoInput" type="file" name="photo" accept="image/*" />
			<br />
			<label htmlFor="colorInput">Color:</label>
			<input id="colorInput" type="color" name="color" />
			<br />
			<label htmlFor="startDateInput">Start Date:</label>
			<input id="startDateInput" type="date" name="startDate" />
			<br />
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
