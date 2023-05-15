<template>
  <div class="badass-todo">
    <div 
    v-for="todo in todos"
    class="card mb-5"
    :class="{ 'has-background-success-light' : todo.done}"
    >
    <div class="card-content">
      <div class="content">

        <div class="">
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            <h5 class="mb-0">
              {{ todo.title }}
            </h5>
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.age }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.price }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.genre }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.performer }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.time }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.venue }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.info }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.url }}
          </div>
          <div class="has-text-right">
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>

</template>

<script setup>
import { onMounted, ref } from "vue";

import { 
  collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,
  query, orderBy, limit
} from 'firebase/firestore';
import { db } from '@/firebase';

//Firebase refs

const todosCollectionRef = collection(db, 'todos')
const todosCollectionQuery = query(todosCollectionRef, orderBy('date', 'desc'), limit(5))

//Todos

const todos = ref([
  /*{
    id: 'id1',
    content: 'Shave my butt',
    done: false
  },
  {
  id: 'id2',
    content: 'Wash my butt',
    done: true
  }*/
])

//get todos
onMounted(() => {
  onSnapshot(todosCollectionQuery, (querySnapshot) => {
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        title: doc.data().title,
        done: doc.data().done,
        age: doc.data().age,
        price: doc.data().price,
        genre: doc.data().genre,
        performer: doc.data().performer,
        time: doc.data().time,
        venue: doc.data().venue,
        info: doc.data().info,
        url: doc.data().url,
      }
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  })
})

</script>