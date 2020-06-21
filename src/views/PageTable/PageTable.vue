<template>
  <main name="retailers-crud-coupons">
    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      :loading="loading"
      item-key="id"
      :show-select="false"
      :disable-pagination="true"
      :hide-default-footer="true"
    >
      <template v-slot:body="props">
        <draggable
          :list="props.items"
          tag="tbody"
        >
          <tr
            v-for="(item, index) in props.items"
            :key="index"
          >
            <td>
              <v-icon
                small
                class="page__grab-icon"
              >
                mdi-arrow-all
              </v-icon>
            </td>
            <td> {{ index + 1 }} </td>
            <td> {{ item.title }} </td>
            <td> <truncated-id :id="item.id" /> </td>
            <td> {{ item.dateStart }} </td>
            <td> {{ item.dateEnd }} </td>
            <td> {{ item.type.name }} </td>
            <td>
              <v-icon
                small
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
            </td>
          </tr>
        </draggable>
      </template>
    </v-data-table>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Draggable from 'vuedraggable';

import api from '@/api';

import { AxiosResponse, AxiosError } from 'axios';

@Component({
  components: {
    Draggable,
  },
})
export default class PageTable extends Vue {
  private tableItems = []

  private loading = false;

  private tableHeaders = [];

  public async fetchAllUsers() {
    this.loading = true;
    await api
      .get('')
      .then((data: AxiosResponse) => {

      })
      .catch((error: AxiosError) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  created() {
    console.log(this);
  }
}
</script>

<style lang="scss" scoped>
</style>
