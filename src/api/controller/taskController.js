import * as TaskServices from "../services/taskServices.js";
import asyncHandler from "express-async-handler";
import HttpStatus from "http-status";
import * as HttpResponse from "../../lib/httpResponse/index.js";
import { locationsDTO, locationDTO } from "../dto/taskDTO.js";

//GET for All Locations
export const getLocations = asyncHandler(async (req, res) => {
  const locations = await TaskServices.getLocations();
  res
    .status(HttpStatus.OK)
    .send(
      HttpResponse.onSuccess(
        HttpStatus.OK,
        locationsDTO(locations),
        `Here's all Locations`
      )
    );
});

//GET for one location associated with this id
export const getLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const location = await TaskServices.getLocation(id);
  res
    .status(HttpStatus.OK)
    .send(
      HttpResponse.onSuccess(
        HttpStatus.OK,
        locationDTO(location),
        `Here's the location for id: ${id}`
      )
    );
});

//DELETE for location entry
export const deleteLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await TaskServices.deleteLocation(id);
  res
    .status(HttpStatus.ACCEPTED)
    .send(
      HttpResponse.onSuccess(
        HttpStatus.ACCEPTED,
        locationDTO(response),
        `Deleted the location for id: ${id}`
      )
    );
});

//POST for Update
export const updateLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = { ...req.body };
  const location = await TaskServices.updateLocation(id, updates);
  res
    .status(HttpStatus.OK)
    .send(
      HttpResponse.onSuccess(
        HttpStatus.OK,
        locationDTO(location),
        `Here's the updated location for id: ${id}`
      )
    );
});
