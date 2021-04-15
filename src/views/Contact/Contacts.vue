<template>
  <div class="list-view">
    <app-header icon="address-book" title="Contatos"></app-header>
  <section>
    <div class="card">
      <div class="card-header">
        <div class="card-header-content">
          <router-link
              :to="{
                name: 'contacts.save',
              }"
          >
            <b-button type="is-primary" icon-right="plus">Novo</b-button>
          </router-link>
        </div>
      </div>
      <div class="card-content">
  <b-table
      @page-change="onPageChange"
      :data="data"
      :total="total"
      :per-page="20"
      :loading="isLoading"
      paginated
      backend-pagination
      aria-next-label="Próxima Página"
      aria-previous-label="Página Anterior"
      aria-page-label="Página"
      aria-current-label="Página Atual"
      class="table table-striped"
  >
    <b-table-column v-slot="props" field="name" label="Nome">
      {{ props.row.name }}
    </b-table-column>
    <b-table-column v-slot="props" field="name" label="Telefone">
      {{ props.row.phone }}
    </b-table-column>
    <b-table-column
        v-slot="props"
        label="Opções"
        cell-class="width-100"
    >
      <router-link
          :to="{
                  name: 'contacts.save',
                  params: { id: props.row.id },
                }"
      >
        <b-tooltip label="Editar" class="m-1">
          <b-button
              type="is-secondary"
              size="is-small"
              icon-right="edit"
          />
        </b-tooltip>
      </router-link>

      <b-tooltip label="Deletar" class="m-1">
        <b-button
            @click="onClickDelete(props.row.id)"
            type="is-danger"
            size="is-small"
            icon-right="trash"
        />
      </b-tooltip>
    </b-table-column>
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon icon="frown" size="is-large"></b-icon>
          </p>
          <p>Nenhum registro encontrado.</p>
        </div>
      </section>
    </template>
  </b-table>
      </div></div>
</section>
</div>
</template>

<script>
import ContactsService from '@/services/contacts.service';

export default {
  name: "Contacts",
  data: () => ({
    isExporting: false,
    isLoading: true,
    data: [],
    total: 0,
    page: 1,
    searchName: '',
  }),
  methods: {
    load() {
      this.isLoading = true;
      ContactsService.get({
        page: this.page,
      })
          .then(({ data }) => {
            console.log(data);
            const { count, results } = data;
            this.total = count;
            this.data = results;
          })
          .finally(() => setTimeout(() => (this.isLoading = false), 300));
    },
    onPageChange(page) {
      this.page = page;
      this.load();
    },
    onClickDelete(id) {
      this.$buefy.dialog.confirm({
        title: 'Excluindo Contato',
        message:
            'Tem certeza que deseja <b>excluir</b> este contato? Essa ação não pode ser desfeita.',
        cancelText: 'Cancelar',
        confirmText: 'Excluir Contato',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.delete(id),
      });
    },
    delete(id) {
      ContactsService.delete(id)
          .then(() => {
            this.$buefy.snackbar.open('Contato excluída com sucesso.');
            this.load();
          })
          .catch(({ response }) => {
            if (typeof response != 'undefined' && response.status != 200) {
              this.$buefy.snackbar.open(
                  response.message || 'Erro ao tentar excluir o Contato.',
                  'error',
                  4000
              );
            }
          });
    },
  },
  mounted() {
    this.load();
  },
}
</script>

<style scoped>
h1{
  font-size: 30px;
}
</style>
