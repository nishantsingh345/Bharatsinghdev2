import React, { ReactElement } from "react";

interface Props {
  label: string;
  register: any;
  required: boolean;
  id: string;
  name: string;
  errors: { [x: string]: any };
  options: any;
}

function Select({
  label,
  register,
  required,
  id,
  name,
  errors,
  options,
}: Props): ReactElement {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {label}
      </label>
      <div className="mt-1">
        <select
          name={name}
          id={id}
          className="w-full text-gray-500 text-sm px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"
          {...register(name, { required })}
        >
          <option value="">Please select {name}</option>

          {options?.map((opt: any, index: number) => (
            <option key={index} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {errors && errors[name] && (
          <p className="text-red-500">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
}

export default Select;
