// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.29.3
// source: proto/todo.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "todo";

export interface TodoProto {
  idP: number;
  descriptionP: string;
  isDoneP: boolean;
}

export interface TodosProto {
  TodoP: TodoProto[];
}

export interface PostTodoDTOProto {
  descriptionP: string;
  isDoneP: boolean;
}

export interface EmptyProto {
}

export const TODO_PACKAGE_NAME = "todo";

export interface TodoServiceProtoClient {
  postTodoProto(request: PostTodoDTOProto): Observable<TodoProto>;

  getTodoProto(request: EmptyProto): Observable<TodosProto>;
}

export interface TodoServiceProtoController {
  postTodoProto(request: PostTodoDTOProto): Promise<TodoProto> | Observable<TodoProto> | TodoProto;

  getTodoProto(request: EmptyProto): Promise<TodosProto> | Observable<TodosProto> | TodosProto;
}

export function TodoServiceProtoControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["postTodoProto", "getTodoProto"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("TodoServiceProto", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("TodoServiceProto", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TODO_SERVICE_PROTO_SERVICE_NAME = "TodoServiceProto";
