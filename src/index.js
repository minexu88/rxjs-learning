import { Observable } from 'rxjs';

const onSubscribe = observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
};

const source$ = new Observable(onSubscribe);
source$.subscribe({
  next: item => console.log(item)
});
