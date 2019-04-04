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
			:postId="postId"
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
	props: ['dataFromProps'],
	data(){
		return {
			quizData : null,
			title: null,
			description: null,
			publish: null,
			postId: document.getElementById('datahub').dataset.quizid || null
		}
	},
	components: {
		quizForm : QuizForm,
		quizFooter : QuizFooter
	},
	mounted () {
		if (!this.dataFromProps){
			let that = this
			fetch(`http://localhost:8000/quiz/fetch/${that.postId}`)
			.then(function(response) {
				return response.json();
			}).then(function(data) {
				that.quizData = data.quizData;
				that.title = data.title;
				that.description = data.description;
				that.publish = data.publish;
			});
		}else{
			this.quizData = this.dataFromProps.quizData;
			this.title = this.dataFromProps.title;
			this.description = this.dataFromProps.description;
			this.publish = this.dataFromProps.publish;
			this.postId = this.dataFromProps.postId
		}
  	},
}
</script>


<style>
.quiz_container{
	background-color: white;
	margin: 5%;
	padding:2%;
}
.option_container{
	padding: .5%;
}
.each_option{
	margin: 2px;
}

</style>
