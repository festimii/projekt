<template>
  <div class="docform">
<form class="needs-validation" @submit.prevent="onFormSubmit" novalidate>
   <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Emri</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Emri" v-model="user.emri"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Mbiemri</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Mbiemri"  v-model="user.mbiemri" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
    <label for="inputAddress">Adresa</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="2121 Nazmi Ugzmajli Rr" v-model="user.adresa">
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Qyteti</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Qyteti" required v-model="user.qyteti">
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">Kombesia</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="Kombesia" required v-model="user.kombsia">
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Grupi Gjakut</label>
      <select class="form-control" id="validationCustom05" required v-model="user.gjaku">
      <option>I Papercaktuar</option>
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>0+</option>
      <option>0-</option>
      <option>AB+</option>
      <option>AB-</option>
      </select>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
     <legend class="col-form-label col-sm-2 pt-0">ALERXHI</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked v-model="user.alerxhia">
          <label class="form-check-label" for="gridRadios1">
            PO
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" v-model="user.alerxhia">
          <label class="form-check-label" for="gridRadios2">
            JO
          </label>
        </div>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
    <div class="col-sm-10">
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Pershkrimi i kontrolles</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="user.pershkrimi" rows="3"></textarea>
    </div>
    </div>
  </div>
  <div class="col-md-6 mb-3" style="margin-left:-16px;">
      <label for="validationCustom03">Pagesa</label>
      <input type="text" class="form-control" id="validationCustom03" v-model="user.pagesa" placeholder="" required>
      <div class="invalid-feedback">
        Please provide Money.
      </div>
    </div>
       <button id="btn1" class="btn btn-secondary" type="submit">Ruaj</button>
</form>

  </div>
</template>

<script>
import { db } from '../components/firebaseConfig';
export default {
name:'DocForm',
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("Pacienti Ushtua me suuuukses 🤣");
                    this.user.emri = ''
                    this.user.mbiemri = ''
                    this.user.adresa = ''
                    this.user.qyteti = ''
                    this.user.kombsia = ''
                    this.user.gjaku = ''
                    this.user.alerxhia = ''
                    this.user.pershkrimi = ''
                    this.user.pagesa = Number('')
                    console.log(this.user)
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }

</script>

<style>
.docform{
  margin-top: 15px;
  padding-left: 28px;
}
#btn-secondary{
  background-color: #212529 !important
}

</style>