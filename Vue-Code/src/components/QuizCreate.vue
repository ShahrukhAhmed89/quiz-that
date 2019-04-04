<template>
	<div v-if="quizData" class="quiz-wrapper">
		<quizForm  	
			:title="title"
			:description="description" 
			:quizData="quizData" 
			@inputText="title = $event"
			@inputDescription="description = $event"
			:publish="publish"
			>
		</quizForm>
		<quizFooter 
			:title="title" 
			:description="description" 
			:quizData="quizData"
			:publish="publish"
			@inputPublish="publish = $event"
			>
		</quizFooter>
	</div>
</template>


<script>
import QuizForm from './QuizForm'
import QuizFooter from './QuizFooter'

export default {
	data(){
		return {
			quizData: [
				{
					question : '',
					options  : [
						{
							text:'',
							isAnswer: false
						},
						{
							text:'',
							isAnswer: false
						},
					],
					explanation: ""
				},
			],
			title: "",
			description: "",
			publish: false,
		}
	},
	components: {
		quizForm : QuizForm,
		quizFooter : QuizFooter
	},

}
</script>
