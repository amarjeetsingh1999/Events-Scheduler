import gql from 'graphql-tag';

export const GET_SCHEDULES = gql`
  query GetSchedules {
    schedules {
      id
      title
      day
      month
      s_time
      s_time_ap
      e_time
      e_time_ap
      notes
    }
  }
`;

export const SUBMIT_SCHEDULE = gql`
  mutation insert_schedules_one($input: schedules_insert_input!) {
    insert_schedules_one(object: $input) {
      id
    }
  }
`;

export const UPDATE_SCHEDULE = gql`
  mutation update_a_schedule($prev_id: schedules_pk_columns_input!, $input: schedules_set_input!){
    update_schedules_by_pk(
      pk_columns: $prev_id,
      _set: $input
    ){
        id
        title
        day
        month
        s_time
        s_time_ap
        e_time
        e_time_ap
        notes
    }
  }
`;