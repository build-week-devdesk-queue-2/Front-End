import React from "react";

function UserTicketCard({ cardList, deleteCard }) {
	return (
		<>
			{cardList.map((card, index) => (
				<Card key={index} index={index}
				<Details>
					<h2> {card.user_id} {" "} {card.urgency} </h2>
					<h4>
						{card.category}
						<Span>
							{card.description}
						</Span>
						<Span>
 							{card.reply} 
						</Span>
					</h4>
					<h4></h4>
					<Button onClick={() => deleteCard(card.id)}>Delete</Button>
				</Details>
			))}
			<div> {props.title} </div>
	);
			
}

		
			
const solvedOptions = [
	{ key: 'ye', text: 'Yes', value: 'yes' },
	{ key: 'no', text: 'No', value: 'no' },

];

export default UserTicketCard;
