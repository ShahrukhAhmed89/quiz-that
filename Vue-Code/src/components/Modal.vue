<template>
	<transition name="modal">
		<div class="alert-wrapper alert-wrapper-show">
			<div class="alert-message">
				<slot name="message"></slot>
				<div class="alert__button">
					<slot name="cancel"></slot>
					<slot name="delete"></slot>
				</div>
			</div>
	</div>
  </transition>
</template>

<script>
export default {
	
}
</script>

<style>
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
