<template>
	<div>
		<form class="quiz__form">
			<input 
				class="quiz__title"
				:value="title"
				@input="$emit('inputText', $event.target.value)"
				type="text" 
				name="title" 
				placeholder="Add Quiz Title"
				id="quiz_title"
			>
			<span id="title-arai-warn" class="aria-title-warning hide">&#9888; Title is Compulsory</span>
			<textarea 
				class="quiz__description"
				:value="description"
				maxlength="500" 
				placeholder="Add Description..."
				@input="$emit('inputDescription', $event.target.value)"
				id="quiz_description"
			>
			</textarea>
			<fieldset class="quiz__set" v-for="(question, questionIndex) in quizData" :key="questionIndex">
				<header class="set__header">Question
						<span class="set__number">
								<strong>{{ questionIndex + 1 }}</strong>
						</span>
				</header>
				<div class="set__delete" title="Delete the question" @click="deletePrompt(questionIndex)"></div>
				<div class="set__question">
						<input type="text" name="title" placeholder="Enter Question" v-model="question.question" :data-qid="questionIndex">
						<span
							class="aria-form-warning hide" 
							:data-ariawarn-qid="`${questionIndex}`"
						>&#9888; Make sure you add a question.
						</span>
				</div>
					<div class="set__option" :data-osid="questionIndex">
						<div class="option__unit" v-for="(option, optionIndex) in question.options" :key="optionIndex">
								<div class="option__unit__text">
										<input class="text__option" 
											type="text" name="option" 
											placeholder="Enter option"  
											maxlength="100"
											v-model="question.options[optionIndex].text"
											:data-oid="`${questionIndex}_${optionIndex}`"
										>
										<span @click="deleteOption(questionIndex, optionIndex)" 
											v-if="optionIndex>1"	
											class="text__option__delete">
										</span>
										<span 
											class="aria-form-warning hide" 
											:data-ariawarn-oid="`${questionIndex}_${optionIndex}`"
											>
											&#9888; Please enter an option.
										</span>
										<span class="character-count" >
												{{ charactersLeft( questionIndex , optionIndex ) }}
										</span>
								</div>
								<div v-if="option" class="option__correct-selector">
										<label class="correct-selector__label">Correct
												<input 
														@click="correctOptions(questionIndex, optionIndex)" 
														type="checkbox" 
														name="radio-correct"
														:value="option.isAnswer"
														v-model="option.isAnswer"
												>
												<span class="correct-selector__button"></span>
										</label>
								</div>	
						</div>
					</div>
				<button class="set__add-option" 
								v-if="question.options.length < 4"  
								@click.prevent="addOption(questionIndex)"
								>	
								<span> + </span>Add Option
				</button>
				<textarea class="set__answer" 
					maxlength="500"  
					name="explaination"
					v-model="question.explanation"
					placeholder="Got an Explaination?"
					@keyup="textAreaHeight"
					>
				</textarea>
			</fieldset>
		</form>
		<button	
				v-if="quizData.length < 25"  
				class="quiz__add-set"
				@click.prevent="addQuestion"
				>	
				<span> + </span>Add Question
		</button>
		<modal v-if="promptShow" >
			<div class="alert__text" slot="message">Are you sure you want to delete the question?</div>
			<button slot="cancel" class="alert__cancel" @click="promptShow=false">Cancel</button>
			<button slot="delete" class="alert__delete" @click="deleteQuestion(questionSelect), promptShow=false">Delete</button>
		</modal>
	</div>
</template>

<script>
import modal from './Modal'


export default {
    props: ['quizData', 'title', 'description', 'publish'],
    data(){
        return {
            questionSelect: null,
            promptShow : false,
            titleText: this.title,
            descriptionText: this.description
        }			
    },
    components:{
  		modal : modal,
    },
    methods : {
        charactersLeft( questionIndex, optionIndex ) {
			let option = this.quizData[questionIndex].options[optionIndex].text;
			if (option===undefined) return 100 + " / " + 100 + " characters remaining";
			let optionChar = option.length,
				charLimit = 100,
				charLeft = 100;
				charLeft = charLimit - optionChar;
			return `${charLeft} / ${charLimit} characters remaining`;
        },
        addOption(questionIndex){
			let thisQuestion = this.quizData[questionIndex];
			if ( thisQuestion.options.length < 4 ){
				let additionalArray = [{text:'',	isAnswer: false}];
				thisQuestion.options = thisQuestion.options.concat(additionalArray);
			};
        },
        addQuestion(){
			let noOfQuestions = this.quizData.length;
			if( noOfQuestions < 25 ){
				let newQuestion = {
					question : "",
					options : [
						{
							text:'',
							isAnswer: false
						},
						{
							text:'',
							isAnswer: false
						},
					],
					explanation : ""
				};
				this.quizData.push(newQuestion);
			}
        },
        deletePrompt(questionIndex){
			this.questionSelect = questionIndex
			this.promptShow = true
		},
		deleteOption( questionIndex, optionIndex ){
			this.quizData[questionIndex].options.splice(optionIndex,1);
		},
		correctOptions( questionIndex, optionIndex ){
			let option = this.quizData[questionIndex].options[optionIndex];
			option.isAnswer = !option.isAnswer;
		},
		deleteQuestion(questionIndex){
			this.quizData.splice(questionIndex,1)
		},
		textAreaHeight(e){
			let element = e.target || e

			element.style.overflow = 'hidden';
			element.style.height = 0;
			element.style.height = element.scrollHeight + 'px';
		}
		
	},
	mounted(){
		[...document.getElementsByClassName("set__answer")].forEach(element => {
			this.textAreaHeight(element)
		});
	}
}
</script>
