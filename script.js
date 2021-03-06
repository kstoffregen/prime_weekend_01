/* Make a form that can capture and store employees; First Name, Last Name, Employee Number, Title, Last Review Score, and Salary. Store that information in an object.*/
/* Then, with that information captured, construct a list (UL) that populates with the most current employee information. Meaning that there should be a full list of employees represented on the screen.*/
/* Not only should the employee information be present, but also add a 'remove' button grouped next to each employee’s information. Clicking that button should remove that specific employee.*/


$(document).ready(function(){

	var $form = $('#employeeInfo');
	var $firstName = $('#firstName');
	var $lastName = $('#lastName');
	var $employeeNumber = $('#employeeNumber');
	var $title = $('#title');
	var $reviewScore = $('#reviewScore');
	var $salary = $('#salary');
	var $formOutput = $('#formOutput');

	$form.on('submit', function(e){   //change ('#employeeInfo') to jQuery var
		e.preventDefault();
		var employee = new Employee (
			$firstName.val(), $lastName.val(), $employeeNumber.val(), $title.val(), $reviewScore.val(), $salary.val()
			);
		appendEmployee(employee);
	});

	var Employee = function(firstName, lastName, employeeNumber, title, reviewScore, salary){
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeNumber = employeeNumber;
		this.title = title;
		this.reviewScore = reviewScore;
		this.salary = salary;
	}

	function appendEmployee(employee){
		var $newEl = $('<li>');
		$newEl.attr('class', 'reviewScore' + employee.reviewScore);   // if(employee.reviewScore == 5){$('employee.reviewScore').css('background-color', 'green');}
		$newEl.text(employee.firstName + " " + employee.lastName + " " + employee.employeeNumber + " " + employee.title + " " + employee.reviewScore + " " + employee.salary);

		var $button = $('<button>');    //removeButton = document.createElement('button'); removeButton.appendChild(buttonT); newEl.appendChild(removeButton);
		$button.text('Remove Employee');   //buttonT = document.createTextNode("Remove Employee"); 
		$button.attr('class', 'js-delete');

		$newEl.append($button);
		$formOutput.append($newEl);
	}

	$formOutput.on('click', '.js-delete', function(e){  //change ('#formOutput') to jQuery var
			e.preventDefault;
			$(this).parent().remove();
			
		});

	


});




/* In the review score section, make sure to put some sort of color indicator based on their review. The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor.*/

/* The system need not persist when the page refresh. Meaning that a page refresh will reload the entire screen. The submission should be as visually appealing as possible, and there will be some consideration of styling when you submission is reviewed.*/

/* Hard Mode
Include a button to generate a completely random employee. As one more step of hard mode, alphabetically sort the employees in the generated list.*/

/* Pro Mode
Include a section at the top of the page that totals the salaries of all the employees (Hint: the trick will be what happens when you remove an employee).*/


// --- NOT USED ---

// (function(){
// 	var form = document.getElementById('employeeInfo');

// 	addEvent(form, 'submit', function(e){
// 		e.preventDefault();
// 		var elements = this.elements;
// 		var firstName = elements.firstName.value;
// 		document.getElementById('data')
// 	});
// }());

		// var $div = $('#data');

		// employee[inputFirstName.attr('#firstName')] = $inputFirstName.val();
		// employee[inputLastName.attr('lastName')] = $inputLastName.val();
		// employee[inputEmployeeNumber.attr('employeeNumber')] = $inputEmployeeNumber.val();
		// employee[inputTitle.attr('title')] = $inputTitle.val();
		// employee[inputReviewScore.attr('reviewScore')] = $inputReviewScore.val();
		// employee[inputSalary.attr('salary')] = $inputSalary.val();

		// employee[this.firstName] = $(this).val();
		// employee[this.lastName] = $(this).val();
		// employee[this.employeeNumber] = $(this).val();
		// employee[this.title] = $(this).val();
		// employee[this.reviewScore] = $(this).val();
		// employee[this.salary] = $(this).val();

// employee.firstName = elements.firstName.value;
// 		employee.lastName = elements.lastName.value;
// 		employee.employeeNumber = elements.employeeNumber.value;
// 		employee.title = elements.title.value;
// 		employee.reviewScore = elements.reviewScore.value;
// 		employee.salary = elements.salary.value;		

// 		listOfEmployees.push(employee);
// 		console.log(employee);

// 		text(employee.firstName + " " + employee.lastName + " " + employee.employeeNumber + " " + employee.title + " " + employee.reviewScore + " " + employee.salary)

		
		// var newText = document.createTextNode("Full Name: " + $employee.firstName + " " + $employee.lastName + "\nEmployee Number: " + $employee.employeeNumber + "\nTitle: " + $employee.title + "\nReview Score: " + $employee.reviewScore + "\nSalary: " + $employee.salary);


// position = document.getElementById('formOutput');
// 		newEl = document.createElement('li');

// 		newText = document.createTextNode(employee.firstName + " " + employee.lastName + " " + employee.employeeNumber + " " + employee.title + " " + employee.reviewScore + " " + employee.salary);

// 		newEl.appendChild(newText);
// 		position.appendChild(newEl);

