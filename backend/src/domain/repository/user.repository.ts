import {  EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user";

@EntityRepository(User)
export class PersonRepository extends Repository<User> {
  
}