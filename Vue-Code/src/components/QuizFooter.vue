<template>
    <div class="footer-wrapper">
      <!--  <div class="total-question">
			 <div class="total-question__display">Questions</div>
            <div class="total-question__number">{{quizData.length}}</div> 
			<span class="error-message">{{errorMessage}}</span> 
        </div>-->
		<div class="form-errors"><div v-if="errorMessage"><span class="form-errors__holder">Error: </span>{{errorMessage}}</div></div>
        <div class="action">
					<div  class="action__item action__delete">
						<button @click="deletePostPrompt" id="delete" title="Delete quiz" >Delete</button>
					</div>
				<div class="action__item action__publish">
					<label for="publish_quiz" class="publish_quiz" title="Publish quiz">publish
						<input type="checkbox" v-model="shouldPublish"  id="publish_quiz" value="publish" @input="$emit('inputPublish', $event.target.checked)">
						<span class="checkmark"></span>	
					</label>
				</div>
			<div  class="action__item action__save">
				<!-- <button @click="submitQuiz"  id="save" :disabled="saveStatus === 'saving' || saveStatus === 'saved'">
					<span v-if="saveStatus==='save'">Save</span>
					<span v-else-if="saveStatus==='saving'">Saving <span class="spinner"></span></span>
					<span v-else-if="saveStatus === 'saved'">Saved</span>	
				</button> -->
				<button
				 		v-if="saveStatus==='save'"
						@click="submitQuiz"  
						id="save" 
						>
						Save
				</button>
				<button
					v-if="saveStatus==='saving'"
					@click="submitQuiz"  
					id="save" 
					disabled
					>
					Saving <span class="spinner"></span></span>
				</button>
				<button
				 		v-if="saveStatus==='saved'"
						@click="submitQuiz"  
						id="save" 
						disabled
						>
						Saved
				</button>
			</div>
			
       </div>
		<modal v-if="deleteModal" >
			<div class="alert__text" slot="message">Are you sure you want to delete this quiz?</div>
			<button slot="cancel" class="alert__cancel" @click="deleteModal=false">Cancel</button>
			<button slot="delete" class="alert__delete" @click="deletePost(postId), deleteModal=false">Delete</button>
		</modal>
    </div>
</template>


<script>

import modal from './Modal'

export default {
	props : ['quizData', 'title', 'description', 'postId', 'publish'],
	data(){
		return {
			dataChange 	: true,
			saveStatus 	: 'save',
			hasSaved 	: false,
			errorMessage: '',
			deleteModal	:false,
			shouldPublish: this.publish
		} 
	}, 
	components:{
  		modal : modal,
    },
    methods: {
		validateForm(){
			let questions = this.quizData,
					hasErrors = false,
					errors	= [];

			// if ( questions.length < 5 ) {
			// 	this.saveStatus = 'save'
			// 	return this.errorMessage = 'Please add atleast 5 questions.'
			
			// }
			this.errorMessage = ""

			document.querySelectorAll(".warning-border").forEach((elm) => elm.classList.remove('warning-border'))
			document.querySelectorAll(".set__option--warning").forEach((elm) => elm.classList.remove("set__option--warning"));
			document.querySelectorAll(".aria-form-warning").forEach((elm) => elm.classList.add("hide"));
			document.getElementById("title-arai-warn").classList.add("hide");

			if (!this.title){
				document.getElementById("quiz_title").classList.add("warning-border");
				document.getElementById("title-arai-warn").classList.remove("hide");
			}

			for( let i in questions ){
				if (!questions[i].question.trim()){
					hasErrors = true
					this.errorMessage = 'Make sure you correct the form errors.'
					document.querySelector(`[data-qid='${i}']`).classList.add("warning-border");
					document.querySelector(`[data-ariawarn-qid='${i}']`).classList.remove("hide");
				}
				let options = questions[i].options;
				let chosenCorrect = []
				for (let j in options){
					if (!options[j].text.trim()){
						hasErrors = true
						this.errorMessage = 'Make sure you correct the form errors.'
						document.querySelector(`[data-oid='${i}_${j}']`).classList.add("warning-border");
						document.querySelector(`[data-ariawarn-oid='${i}_${j}']`).classList.remove("hide");
					};
					chosenCorrect.push(options[j].isAnswer)
				};
				if (!chosenCorrect.includes(true)){
					hasErrors = true
					this.errorMessage = 'Make sure you correct the form errors.'
					document.querySelector(`[data-osid='${i}']`).classList.add("set__option--warning");
				}
			};

			if (hasErrors) this.saveStatus = 'save' 
			return hasErrors;

		},
		submitQuiz(e){
			let that = this;
			let validationError = false;
			that.saveStatus = 'saving';
			that.hasSaved = true;

			// if (that.publish) 
			validationError = this.validateForm();
			
			if (validationError) return;
			
			let fetchURL, 
				postId = that.postId;
			if(postId){
				fetchURL = `http://localhost:8000/quiz/save/${postId}`
			}else{
				fetchURL = 'http://localhost:8000/quiz/submit'
			}
			fetch(fetchURL, {
				method: 'post',
				credentials: 'same-origin',
				headers: {
					"X-CSRFToken" : this.getcsrf('csrftoken'),
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'X-Requested-With': 'XMLHttpRequest'
				},
				body: JSON.stringify({
						quizData: that.quizData,
						title: that.title, 
						description: that.description, 
						publish: that.publish
					})
			}).then(function(response) {
				return response.json();
			}).then(function(data) {
				if (data.redirect==="true"){
					that.$router.push({ 
						name: 'quizEdit',
						params: { 
							id: data.id, 
							dataFromProps: { 
								quizData : that.quizData, 
								title: that.title, 
								description: that.description, 
								postId: data.id,
								publish: that.publish
							}
						} 
					})
				}
				that.saveStatus = 'saved'
			}).catch(function(e) {
				that.errorMessage = 'Error while saving the form. Please try again'
				that.saveStatus = 'save'
			})
		},
		deletePostPrompt(){	
			this.deleteModal = true
		},
		deletePost(id){
			let that = this;
			if (id){
				fetch(`http://localhost:8000/quiz/delete/${id}`, {
					method: 'post',
					credentials: 'same-origin',
					headers: {
						"X-CSRFToken" : this.getcsrf('csrftoken'),
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						'X-Requested-With': 'XMLHttpRequest'
					},
					body: {}
				}).then(function(response){
					debugger;
					return response.json()
				}).then(function(data){
					debugger;
					window.location.href = 'http://localhost:8000/quiz/'
				}).catch(
					that.errorMessage = 'Error while saving the form. Please try again'
				)
			}else{
				window.location.href = 'http://localhost:8000/quiz/'
			}
		},
		getcsrf(name){
			var cookieValue = null;
			if (document.cookie && document.cookie !== '') {
				var cookies = document.cookie.split(';');
				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i].trim();
					if (cookie.substring(0, name.length + 1) === (name + '=')) {
							cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
							break;
					}
				}
			}
			return cookieValue;
		}


	},
	watch:{
		quizData: {
			handler(newVal, oldVal){
				this.saveStatus = 'save'
				if ( this.hasSaved ){
					this.validateForm()
				}
			},
			deep: true
		},
		title : {
			handler(){
				this.saveStatus = 'save'
				if ( this.hasSaved ){
					this.validateForm()
				}
			},
		},
		description : {
			handler(){
				this.saveStatus = 'save'
				if ( this.hasSaved ){
					this.validateForm()
				}
			},
		},
		publish : {
			handler(){
				this.saveStatus = 'save'
				if ( this.hasSaved ){
					this.validateForm()
				}
			},
		}
	}
}
</script>
