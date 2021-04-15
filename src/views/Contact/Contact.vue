<template>
  <div>
    <section>
      <div class="card">
        <div class="card-content">
          <div class="contact">
            <form action="">
              <div class="row">
                <div class="col-6">
                  <app-input
                      name="name"
                      label="Nome"
                      v-model="contact.name"
                      :errors="errors.name"
                  ></app-input>
                </div>
                <div class="col-6">
                  <app-input
                      name="phone"
                      label="Telefone"
                      v-mask="'(##) #####-####'"
                      v-model="contact.phone"
                      :errors="errors.phone"
                  ></app-input>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <b-button
                      @click="onSubmit()"
                      type="is-primary"
                  >Salvar</b-button
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactsService from '@/services/contacts.service';
export default {
  name: "Contact",
  data: () => ({
    errors: {},
    isLoading: true,
    title: '',
    contact: {},

  }),
  methods: {
    loadContact(id) {
      if (typeof id != 'undefined') {
        this.isLoading = true;
        ContactsService.getId(id)
            .then(({ data }) => (this.contact = data))
            .finally(() => (this.isLoading = false));
      } else {
        this.isLoading = false;
      }
    },
    onSubmit() {
      this.errors = {};
      !this.id && this.save(this.contact);
      this.id && this.update(this.id, this.contact);
    },
    save(data) {
      this.isSaving = true;
      data = {
        ...data,
        phone: this.contact.phone?.replace(/\D/g, ''),
      }
      ContactsService.save(data)

          .then(() => {
            this.$buefy.snackbar.open('Contato cadastrada com sucesso!');
            this.$router.push({ name: 'contacts.index' });
          })
          .catch(({ response }) => {
            const message = response.data.message;
            this.$buefy.snackbar.open(
                typeof message === 'string'
                    ? message
                    : 'Erro ao tentar atualizar a Contato.',
                'error'
            );
            this.errors = response.data;
          })
          .finally(() => (this.isSaving = false));
    },
    update(id, data) {
      this.isSaving = true;
      data = {
        ...data,
        phone: this.contact.phone?.replace(/\D/g, ''),
      }
      ContactsService.update(id, data)
          .then(() => {
            this.$buefy.snackbar.open('Contato atualizado com sucesso!');
            this.$router.push({ name: 'contacts.index' });
          })
          .catch(({ response }) => {
            const message = response.data.message;
            this.$buefy.snackbar.open(
                typeof message === 'string'
                    ? message
                    : 'Erro ao tentar atualizar o Contato.',
                'error'
            );
            this.errors = response.data.message;
          })
          .finally(() => (this.isSaving = false));
    },
  },

  mounted() {
    const id = this.$route.params.id;
    this.id = this.$route.params.id;
    this.loadContact(id);
  },
}
</script>

<style scoped>

</style>