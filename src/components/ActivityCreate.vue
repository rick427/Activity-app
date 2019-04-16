    <template> 
        <div class="activityCreate">
           <a v-if="!isFormDisplay" @click="isFormDisplayed" class="button is-primary is-block is-alt is-large" href="#">New Activity</a>
            <div class="create-form" v-if="isFormDisplay">
                <h2>Create Activity</h2>
                <form>
                    <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input v-model="newActivity.title" class="input" type="text" placeholder="Read a Book">
                    </div>
                    </div>

                    <div class="field">
                       <label class="label">Notes</label>
                       <div class="control">
                           <textarea v-model="newActivity.notes" class="textarea" placeholder="Write something here"></textarea>
                       </div>
                    </div>

                     <div class="field">
                       <label class="label">Notes</label>
                       <div class="control">
                           <select v-model="newActivity.category" class="select">
                             <option disabled value="">Please select one</option>
                             <option v-for="category in categories" :key="category.id">{{category.text}}</option>
                           </select>
                       </div>
                    </div>

                    <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" :disabled="!isFormValid"  @click.prevent="createActivity">Create Activity</button>
                    </div>
                    <div class="control">
                        <button class="button is-text"  @click.prevent="isFormDisplayed">Cancel</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </template>

<script>
import {createActivityAPI} from '@/api';
export default {
    props: {
        categories: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
          isFormDisplay: false,

          newActivity: {
            title: '',
            notes: '',
            category:''
         }
        }     
    },

    computed: {
        isFormValid (){
      return this.newActivity.title && this.newActivity.notes;
     }
    },

    methods:{
      isFormDisplayed () {
        this.isFormDisplay = !this.isFormDisplay;
      },
      createActivity () {
        createActivityAPI({...this.newActivity})
         .then(activity => {
             this.newActivity.title = ''
             this.newActivity.notes = ''
             this.newActivity.category= ''
             this.isFormDisplayed = false
             this.$emit('activityCreated', {...activity})
        })
      }
    }
}
</script>
